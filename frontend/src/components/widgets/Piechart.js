import  {Pie}  from 'react-chartjs-2'

const Piechart = (props) => {

    console.log(props.data)

    const chartLabels = props.labels
    const chartData = Object.values(props.data)
    const chartTitle = props.title

    console.log(chartData)
    
    const data = {
        labels: chartLabels,
        datasets: [
          {
            label: '# of Votes',
            data: chartData,
            backgroundColor: [
                '#106d1a',
                '#f17d5d'
                
            ],
            borderColor: [
                '#106d1a',
                '#40853d',
                
            ],
            borderWidth: 1,
          },
        ],
      };

    return(
        <div>
            <div className='header'>
                <h5 className='title'>{chartTitle}</h5>
            </div>
            <Pie data={data} />
        </div>
    )
}

export default Piechart;
