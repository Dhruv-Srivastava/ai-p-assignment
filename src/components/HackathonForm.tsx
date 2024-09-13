import { useForm, useWatch } from "react-hook-form";
import { motion } from "framer-motion";

import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";

import { Hackathon } from "../utils/types";

import CalendarIcon from "../assets/calendar.svg";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface HackathonFormProps {
  onSave: (data: Hackathon) => void;
  initialData?: Hackathon;
  mode: "CREATE" | "EDIT";
}

export default function HackathonForm({
  onSave,
  initialData,
  mode,
}: HackathonFormProps) {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
    reset,
  } = useForm<Hackathon>({
    defaultValues: initialData,
  });

  const selectedBlob = useWatch({ control, name: "image" }) || [];
  console.log(selectedBlob);

  const watchedStartDate = useWatch({ control, name: "startDate" }) || "";
  const watchedEndDate = useWatch({ control, name: "endDate" }) || "";

  function validateImage(file) {
    if (mode === "CREATE" && !selectedBlob) {
      return "Image is required.";
    }
    return true;
  }

  function handleDateChange(field) {
    return function (date: moment.Moment | string) {
      const isoDate = moment(date).toISOString(); // Store in ISO format
      setValue(field, isoDate);
    };
  }

  function onSubmit(data) {
    const id = onSave(data);
    reset();
    navigate(`/hackathon/${id}`, { replace: true });
    toast.success(
      `Hackathon ${mode === "CREATE" ? "Created" : "Edited"} Successfully`
    );
  }

  function validateEndDate(value: string) {
    const startDate = moment(watchedStartDate);
    const endDate = moment(value);
    if (endDate.isBefore(startDate)) {
      return "End date must be after start date";
    }
    return true;
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 mx-auto lg:w-[70%]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      noValidate
    >
      <div className="flex flex-col gap-3 lg:gap-5">
        <label className="text-[#333333] text-base font-medium">
          Challenge Name
        </label>
        <input
          type="text"
          placeholder="Enter challenge name"
          {...register("name", { required: `Challenge name is required` })}
          className="text-[#444444] text-base font-medium border border-[#B7B7B7] rounded-md py-2 px-5"
        />
        {errors.name && (
          <span className="font-sm font-semibold text-red-500">
            {errors.name.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3 lg:gap-5">
        <label className="text-[#333333] text-base font-medium">
          Start Date
        </label>
        <input
          hidden
          type="hidden"
          {...register("startDate", { required: `Start date is required` })}
        />
        <div className="outline-none text-[#444444] text-base font-medium border border-[#B7B7B7] rounded-md py-2 px-5 w-full flex items-center">
          <Datetime
            value={moment(watchedStartDate).toDate()}
            dateFormat="Do MMM'YY"
            timeFormat="hh:mm A"
            onChange={handleDateChange("startDate")}
            inputProps={{ readOnly: true }} // Make input read-only
            className="w-full flex-1"
          />
          <img src={CalendarIcon} alt="" />
        </div>
        {errors.startDate && (
          <span className="font-sm font-semibold text-red-500">
            {errors.startDate.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3 lg:gap-5">
        <label className="text-[#333333] text-base font-medium">End Date</label>
        <input
          type="hidden"
          placeholder="Enter end date"
          {...register("endDate", {
            required: `End date is required`,
            validate: validateEndDate,
          })}
        />
        <div className="outline-none text-[#444444] text-base font-medium border border-[#B7B7B7] rounded-md py-2 px-5 flex justify-between items-center">
          <Datetime
            value={moment(watchedEndDate).toDate()}
            dateFormat="Do MMM'YY"
            timeFormat="hh:mm A"
            onChange={handleDateChange("endDate")}
            inputProps={{ readOnly: true }} // Make input read-only
            className="w-full flex-1"
          />
          <img src={CalendarIcon} alt="" />
        </div>
        {errors.endDate && (
          <span className="font-sm font-semibold text-red-500">
            {errors.endDate.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3 lg:gap-5">
        <label className="text-[#333333] text-base font-medium">
          Description
        </label>
        <textarea
          rows={6}
          placeholder="Enter some meaningful description"
          {...register("description", { required: `Description is required` })}
          className="text-[#444444] text-base font-medium border border-[#B7B7B7] rounded-md py-5 px-5"
        />
        {errors.description && (
          <span className="font-sm font-semibold text-red-500">
            {errors.description.message}
          </span>
        )}
      </div>

      <div className="self-start flex flex-col gap-3 lg:gap-5">
        <label className="text-[#333333] text-base font-medium">Image</label>
        <div className="relative bg-[#F8F9FD] rounded-xl items-center p-6 flex flex-col gap-4">
          <input
            type="file"
            accept="images/*"
            placeholder="Enter some meaningful description"
            {...register("image", { validate: validateImage })}
            className="absolute inset-0 w-full h-full opacity-0 z-10 outline-2 cursor-pointer"
          />
          {selectedBlob.length > 0 && (
            <motion.div
              className="w-full h-full"
              key={""}
              initial={{ scale: 0, opacity: 0, rotateZ: -10 }}
              animate={{ scale: 1, opacity: 1, rotateZ: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <img
                src={
                  mode === "CREATE"
                    ? URL.createObjectURL(selectedBlob[0])
                    : selectedBlob instanceof FileList
                    ? URL.createObjectURL(selectedBlob[0])
                    : selectedBlob
                }
                className="w-full h-full max-h-[320px] object-cover object-center rounded-lg"
              />
            </motion.div>
          )}
          Upload Image
        </div>
        {errors.image && (
          <span className="font-sm font-semibold text-red-500">
            {errors.image.message}
          </span>
        )}
      </div>

      <div className="self-start flex flex-col gap-3 lg:gap-5">
        <label className="text-[#333333] text-base font-medium">
          Level Type
        </label>
        <select
          {...register("level", { required: `Level type is required` })}
          className="text-[#333333] text-base font-medium border border-[#B7B7B7] rounded-md py-2 px-5"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        {errors.level && (
          <span className="font-sm font-semibold text-red-500">
            {errors.level.message}
          </span>
        )}
      </div>
      <button className="bg-[#44924C] py-3 px-5 text-white text-sm font-semibold mt-3 rounded-xl">
        Save changes
      </button>
    </motion.form>
  );
}
