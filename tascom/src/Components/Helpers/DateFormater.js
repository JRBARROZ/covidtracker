function DateFormater(props) {
    const date = props.date;
    const dateFormated = new Date(date).toLocaleString('pt-BR')
    return {
        dateFormated
    }
}
export default DateFormater
