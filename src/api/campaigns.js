export const fetchCampaigns = async () => {
  const res = await fetch("/api/campaigns.json");
  const data = await res.json();
  return data;
};
