import { useEffect, useState } from "react";

const useClasses = () => {
    const [classes, setClasses] = useState([]);
    // if I want to use Loading State upon data load
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => {
            setClasses(data)
            setLoading(false);
        })
    }, [])
    return [classes, loading]

}

export default useClasses;

