import { GetIdByPassword } from "./http";

function GetId(password: string){
    const ID = GetIdByPassword(password)
    return(ID);
}
export default GetId;