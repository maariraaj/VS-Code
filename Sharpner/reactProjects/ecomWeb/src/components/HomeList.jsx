
const HomeList = (props) => {

  return (
    <tr key={props.key}>
        <td>{props.date}</td>
        <td>{props.location}</td>
        <td>{props.title}</td>
        <button type="button" className="btn btn-info">Buy Tickets</button>
    </tr>
  )
}

export default HomeList