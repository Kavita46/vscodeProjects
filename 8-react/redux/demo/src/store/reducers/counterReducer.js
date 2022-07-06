const initState = {
    count: 0,
    users: ['张三', '李四']
}

export default function counterReducer(state = initState, action) {

    console.log(action)

    switch (action.type) {
        case 'add':
            state.count += action.num
            const users = [...state.users]
            users.push(action.user)
            return {
                ...state,
                users: [...users]
            }

        case 'reduce':
            state.count -= action.num
            const users2 = [...state.users]
            users2.shift();
            return {
                ...state,
                users: [...users2]
            }
        default: return state
    }
}

