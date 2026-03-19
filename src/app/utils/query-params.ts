import { IProductParams } from "@models";

export const convertParamsToQueryParams = (params: IProductParams): string => {
  const qp = new URLSearchParams();
  if (params.search) qp.append("q", params.search);

  if (params.sortBy) qp.append("sortBy", params.sortBy);

  qp.append("limit", `${params.limit}`);
  qp.append("skip", `${params.skip}`);

  return qp.toString();
};
