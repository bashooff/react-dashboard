import { Bar } from 'react-chartjs-2';

const Barchart = () => {

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#0a156d',
                '#443889',
                '#6e5ea6',
                '#9786c3',
                '#bfb1e1',
                '#e8ddff',
            ],
            borderColor: [
                '#0a156d',
                '#443889',
                '#6e5ea6',
                '#9786c3',
                '#bfb1e1',
                '#e8ddff',
            ],
            borderWidth: 1,
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
    







    return(
    <div>
      <div className='header'>
        <h5 className='title'>Vertical Bar Chart</h5>
      </div>
      <Bar data={data} options={options} />
    </div>
    
  );
    }
  export default Barchart;