import { connect, useSelector, /*useDispatch*/ } from 'react-redux';
import { increment, decrement } from '../../store/features/counter/counterSlice';

function mapStateToProps(state) {
  const{ user } = state;
  return { 
    name: user.name,
    lastName: user.lastName
  };
}

function Main({ name, lastName }) {
  //const count = useSelector((state) => state.counter.value);  
  //const dispatch = useDispatch();

  return (
    <div>
      
      <p>
        <span>{name}</span>
      </p>
      <p>
        <span>{lastName}</span>
      </p>

      
    </div>
  );
}

export default connect(mapStateToProps)(Main);
