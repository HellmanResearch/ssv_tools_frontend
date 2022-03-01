
// 时间字符串截取到分钟 更友好
export const g_datetime = (value) => {
    return value ? value.substr(0, 16) : value
}
// 数组转换成字符串
export const g_array_to_string = (value) => {
    if (Array.isArray(value)) {
        return value.join("、")
    }
    return value
}