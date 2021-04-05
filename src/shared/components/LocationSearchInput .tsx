import React, {ReactDOM} from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import API from '../../api/GetWeather';

export class LocationSearchInput extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {address: '', weatherData: []};
    }

    handleChange = (address: any) => {
        console.log(address)
        this.setState({address});
    };

    handleSelect = (address: string) => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                this.callService(address, latLng)
                console.log('Success', latLng)
            })
            .catch(error => console.error('Error', error));

        console.log('select->', address)
    };

    callService = (address: any, data: any) => {
        API.get(`/data/2.5/onecall?appid=25ffec7b9a2e38e598a909dd0d146f3e&lat=${data.lat}&lon=${data.lng}&exclude=hourly,daily&units=metric`)
            .then(res => {
                console.log(res.data);
                this.setState({weatherData: res.data});
            })
            .then(err => {
                console.log(err);

            })
        // fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.lat}&lon=${data.lng}&exclude=hourly,daily&units=metric&appid=25ffec7b9a2e38e598a909dd0d146f3e`)
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 items: result
        //             });
        //             console.log('result->', result)
        //             console.log('resultItems->', result.items)
        //         },
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //         }
        //     )
    }

    render() {
        return (
            <div>
                <PlacesAutocomplete
                    value={this.state.address}
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                >
                    {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                        <div>
                            <input
                                {...getInputProps({
                                    placeholder: 'Search Places ...',
                                    className: 'location-search-input',
                                })}
                            />
                            <div className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                        ? {backgroundColor: '#fafafa', cursor: 'pointer'}
                                        : {backgroundColor: '#ffffff', cursor: 'pointer'};
                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, {
                                                className,
                                                style,
                                            })}
                                        >
                                            <span>{suggestion.description}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>
                <div className="row">
                    {JSON.stringify(this.state.weatherData)}
                </div>

            </div>

        );
    }
}
