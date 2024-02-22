import {ADV_API_URL} from '../pages/utils/api';

export const createCampaign = async (data) => {
  const formData = new FormData();
  Object.keys(data).map((key) => {
    if (key === "general") {
      const { creatives, ...rest } = data[key];
      console.log(creatives, "creatives", rest, "rest");
      formData.append("general", JSON.stringify(rest));
    } else {
      formData.append(key, JSON.stringify(data[key]));
    }
  });
  const response = await fetch(`${ADV_API_URL}/create-campaign`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
  return response.data;
};

export const getCampaigns = async () => {
  const response = await fetch(`${ADV_API_URL}/findCampaign`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return await response.json();
};
