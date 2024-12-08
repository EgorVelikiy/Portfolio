import './toolbar.css';

export function Toolbar(props) {
    const { filters, selected, onSelectFilter } = props
    return (
        <div className="toolbar">
            {filters.map(item => (
                <button onClick={onSelectFilter} className={item === selected ? 'select' : ''} key={item}>
                    {item}
                </button>
            ))}
        </div>
    )
}