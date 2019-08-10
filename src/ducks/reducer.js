const initalState = {
  username: "",
  profileImg: "",
  userId: 0
};


//EVEN IF I MAKE A DIFFRENTIN ACTION 

export const SET_USER = 'SET_USER'
export  const  setUser = (user,img,id) => {
  return {
    type: SET_USER,
    payload: {
      user:user,
      img:img,
      id:id
    }
  }

}



export default (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
      case SET_USER:
        // const {username,profileImg,userId} = payload 
      return { ...state, username:payload.user, profileImg:payload.img, id: payload.id}  
    default:
      return state;
  }
};
