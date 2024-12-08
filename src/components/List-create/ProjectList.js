import './list.css';

export function ProjectList(props) {
    const { data } = props
    let key = 0
    return (
        data.map(item => (
            <div className="img" key={key++}>
                <img src={item.img} />
            </div>
        ))
    )
}