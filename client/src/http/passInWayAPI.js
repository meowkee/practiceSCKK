import { $host } from "./index";

export const fetchEvents = async (startDate, endDate, owid) => {
    const {data} = await $host.get(`api/event?start=${startDate}&end=${endDate}&owid=${owid}`, {startDate, endDate, owid});
    return data;
}

export const fetchReaders = async () => {
    const {data} = await $host.get(`api/reader`);
    return data;
}

export const fetchOwners = async () => {
    const {data} = await $host.get(`api/owner`);
    return data;
}

export const fetchWorksites = async () => {
    const {data} = await $host.get(`api/worksite`);
    return data;
}

export const fetchSubdivisions = async () => { 
    const {data} = await $host.get(`api/subdivision`);
    return data;
}

export const fetchJobdegrees = async () => {
    const {data} = await $host.get(`api/jobdegree`);
    return data;
}