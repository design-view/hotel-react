//액션타입, 리듀서
const DATE_DATA_UPDATE = "reserve/DATE_DATA_UPDATE";
const DATA_UPDATE = "reserve/DATA_UPDATE";

//액션 생성 객체
export const dateDataUpdate = (data) => ({
    type: DATE_DATA_UPDATE,
    payload: data
})
export const dataUpdate = (data) => ({
    type: DATA_UPDATE,
    payload: data
})

//초기상태
const initialState = {
    rv_date: {
        checkin: "",
        checkout: "",
    },
    rv_adult: "1",
    rv_child: "0",
    rv_room: {
        roomname: "",
        roomno: "",
        price: "",
    }
}
//리듀서
export default function reserve(state = initialState, action) {
    switch (action.type) {
        case DATA_UPDATE:
            console.log(action.payload.name);
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        default:
            return state;
    }
}
