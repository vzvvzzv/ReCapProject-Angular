import { RentalDetailDto } from "./rental-detail-dto";
import { ResponseModel } from "./responseModel";

export interface RentalDetailDtoResponseModel extends ResponseModel{
    data:RentalDetailDto[];
}