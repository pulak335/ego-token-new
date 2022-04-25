import React,{useState, useEffect} from 'react';
import '../../../style/time.css';



const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
			</div>
		</div>
	)
}



const Time = () => {
    const [, setPartyTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const target = new Date("06/01/2022 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
    }, [])

    return (
        <>
                <div className="d-flex justify-content-between">
                    <div className="time-box">
                        <span className="count-box-hour">
                            <p className='count-box-hour-text-count'>{days}</p>
                        </span>
                        <p className='time-box-text'>Days</p>
                    </div>
                    <div className="time-box">
                        <span className="count-box-hour">
                            <p className='count-box-hour-text-count'>{hours}</p>
                        </span>
                        <p className='time-box-text'>Hours</p>
                    </div>
                    <div className="time-box">
                        <span className="count-box">
                            <p className='count-box-hour-text-count-2'>{minutes}</p>
                        </span>
                            <p className='time-box-text'>Minutes</p>
                    </div>
                    <div className="time-box">
                        <span className="count-box">
                            <p className='count-box-hour-text-count-2'>{seconds}</p>
                        </span>
                        <p className='time-box-text'>Seconds</p>
                    </div>
                </div>
                <div className='goals-container'>
                    <p className='goals-text'>$18.090 pledget of $25.000 goal</p>
                    <div className='mx-auto mt-3'>
                        <Progress done="35"/>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <button className="Purchase-btn">PURchase tokens</button>
                    </div>
                </div>
    </>
    );
};

export default Time;