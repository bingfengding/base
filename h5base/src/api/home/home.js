import request from '@/utils/request';

//招聘信息
export const getrecruit = (item)=>{
  let data = {...item}
  return request({
    url:"api/index/getrecruit",
    method:"post",
    data
  })
}

// 获取部门信息
export const getdepartment = ()=>{
  let data = {}
  return request({
    url:"api/index/getdepartment",
    method:"post",
  })
}

// 上传简历
export const upload = (item)=>{
  
  let data = {...item}
  return request({
    url:"api/index/upload",
    method:"post",
    data
  })
}
