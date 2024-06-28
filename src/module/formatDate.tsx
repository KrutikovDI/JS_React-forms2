export default function formatDate (date:string) {
    const listDate = date.split('-')
    return listDate[2] + '.' + listDate[1] + '.' + listDate[0]
}