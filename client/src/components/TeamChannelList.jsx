import { AddChannel } from  "../assets/AddChannel";


export const TeamChannelList = ({children, error = false, loading, type}) => {
    // console.log("error", error, type);
    if(error)
    {
        return type === 'team' ? (
            <div className="team-channel-list">
                <p className="team-channel-list_message">
                    Connection error, please wait a moment and try again.
                </p>
            </div>
        ):null;
    }


    
    if(loading)
    {
        return (
            <div className="team-channel-list">
                <p className="team-channel-list_loading">
                    {type === 'team' ? 'Channels' : 'Messages'} loading...
                </p>
            </div>
        )
    }

    return (
        <div className="team-channel-list">
            <div className="team-channel-list_header">
                <p className="team_channel-list_header_title">
                {type === 'team' ? 'Channels' : 'Messages'}
                </p>
                {/* button - add channel */}
            </div>
                {children}
        </div>
    )
}