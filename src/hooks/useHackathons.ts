import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Hackathon } from "../utils/types";
import { mockHackathons } from "../utils/mockData";

// In a real application, these functions would make API calls
const getHackathons = (): Promise<Hackathon[]> => {
  return Promise.resolve(mockHackathons);
};

const getHackathon = (id: string): Promise<Hackathon | undefined> => {
  return Promise.resolve(mockHackathons.find((h) => h.id === id));
};

const createHackathon = (
  hackathon: Omit<Hackathon, "id">
): Promise<Hackathon> => {
  const newHackathon = { ...hackathon, id: Date.now().toString() };
  mockHackathons.push(newHackathon);
  return Promise.resolve(newHackathon);
};

const updateHackathon = (hackathon: Hackathon): Promise<Hackathon> => {
  const index = mockHackathons.findIndex((h) => h.id === hackathon.id);
  if (index !== -1) {
    mockHackathons[index] = hackathon;
  }
  return Promise.resolve(hackathon);
};

const deleteHackathon = (id: string): Promise<void> => {
  const index = mockHackathons.findIndex((h) => h.id === id);
  if (index !== -1) {
    mockHackathons.splice(index, 1);
  }
  return Promise.resolve();
};

export const useHackathons = () => {
  return useQuery<Hackathon[], Error>({
    queryKey: ["hackathons"],
    queryFn: getHackathons,
  });
};

export const useHackathon = (id: string) => {
  return useQuery<Hackathon | undefined, Error>({
    queryKey: ["hackathon", id],
    queryFn: () => getHackathon(id),
  });
};

export const useCreateHackathon = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createHackathon,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hackathons"] });
    },
  });
};

export const useUpdateHackathon = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateHackathon,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hackathons"] });
    },
  });
};

export const useDeleteHackathon = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteHackathon,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hackathons"] });
    },
  });
};
