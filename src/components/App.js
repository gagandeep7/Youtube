// import components
import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/Youtube';
import VideoList from "./VideoList";
import VideoDetail from './VideoDetail';
import Navbar from './Navbar';
import './styles.css'
// create App
class App extends React.Component {

    // intialize states
    state = { videos: [], selectedVideo: null, home: true, num: null };

    // search bar event
    onInputSubmit = async (input) => {

        console.log(input);
        // fetch the request
        const response = await youtube.get('/search', {
            params: {
                // search ite,
                q: input
            }
        });
        // console.log(this.state.num)
        this.setState({ num: 1, home: false, videos: response.data.items });
    };

    // clicked on video thumnail and open the video player
    onVideoSelect = (video) => {

        this.setState({ selectedVideo: video, num: this.state.num + 1 });
    };

    // intial search item
    componentDidMount() {
        this.onInputSubmit('trending');
        let num = this.state.num;
        this.setState({ num: num + 1 });
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className='ui container'>
                    <SearchBar onInputSubmit={this.onInputSubmit} />
                    {/* to display either trending page or searched page */}

                    {this.state.num === 1 ?

                        // intially show home page
                        <div className='ui grid'>
                            <div className='ui row'>
                                <div className='16 wide column' >
                                    <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                                </div>
                            </div>
                        </div>

                        :
                        // if there is search then this
                        <div className='ui grid '>
                            <div className='ui row' id = "web">
                                <div className='eleven wide column' >
                                    <VideoDetail video={this.state.selectedVideo} />
                                </div>
                                <div className='five wide column' >
                                    <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                                </div>
                            </div>
                            <div className='ui row' id = "mob">
                                <div className='sixteen wide column' >
                                    <VideoDetail video={this.state.selectedVideo} />
                                </div>
                            </div>
                        </div>


                    }

                </div>
            </div>
        );
    }
}


export default App;