import { CustomerDetailDto } from "./customer-detail-dto";
import { ResponseModel } from "./responseModel";

export interface CustomerDetailDtoResponseModel extends ResponseModel{
    data:CustomerDetailDto[];
}