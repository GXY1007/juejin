import _axios from "@/plugins/axios";

//获取markdown数据
export const getMD = (params) => {
    return _axios({
        url:'./markdown/test.md',
        method:'get',
        params
    })
}
