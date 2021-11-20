import  {Pie}  from 'react-chartjs-2'

const Piechart = () => {

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#106d1a',
                '#40853d',
                '#649e5e',
                '#87b781',
                '#abd0a4',
                '#ceeac9'
            ],
            borderColor: [
                '#106d1a',
                '#40853d',
                '#649e5e',
                '#87b781',
                '#abd0a4',
                '#ceeac9'
            ],
            borderWidth: 1,
          },
        ],
      };

    return(
        <div>
            <div className='header'>
                <h5 className='title'>Pie Chart</h5>
            </div>
            <Pie data={data} />
        </div>
    )
}

export default Piechart;
