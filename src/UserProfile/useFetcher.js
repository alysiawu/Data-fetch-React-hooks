
import { useState, useEffect} from 'react'

export default function useFetcher(action) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    async function loadData() {
        try {
            setLoading(true)
            const actionData = await action()
            setData(actionData)
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadData()
    }, [action]) // only evoke when action is changed

    return [data, loading, error]
}
// hooks function component vs class component: 
// hooks allow us to draw a thicker line between component logic (state, lifecycle)
// and view logic (renderProps)
// so that we can provide better isoloation bwteen logic and view
// very impactful abstraction

