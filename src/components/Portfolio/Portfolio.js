import './portfolio.css';
import { Toolbar } from '../Toolbar/Toolbar.js';
import { ProjectList } from '../List-create/ProjectList.js'
import data from '../data/data.json'
import { useState } from 'react';

export function Portfolio() {
    const filters = ["All", "Websites", "Flayers", "Business Cards"];

    const [selectFilter, setFilter] = useState('All');
    const [selectData, setData] = useState(data)

    const filter = (e) => {
        const tools = document.querySelectorAll('button');

        tools.forEach(btn => btn.classList.remove('select'))

        e.target.classList.add('select')

        const selected = e.target.textContent;

        if (selected !== 'All') {
            setData(data.filter(img => img.category === selected))
        } else {
            setData(data)
        }

        setFilter(selected)
    }

    return (
        <div className="container">
            <Toolbar
                filters={filters}
                selected={selectFilter}
                onSelectFilter={filter}
            />
            <div className="data">
                <ProjectList
                    data={selectData}
                />
            </div>
        </div>
        
    )
}