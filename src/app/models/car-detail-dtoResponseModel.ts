import { CarDetailDto } from "./car-detail-dto";
import { ResponseModel } from "./responseModel";

export interface CarDetailDtoResponseModel extends ResponseModel{
    data:CarDetailDto[];
}