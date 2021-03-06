/*
Copyright 2015 OpenMarket Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

var React = require('react');

var MatrixClientPeg = require("../../../../src/MatrixClientPeg");
var EventAsTextTileController = require("../../../../src/controllers/molecules/EventAsTextTile");
var ComponentBroker = require('../../../../src/ComponentBroker');
var MessageTimestamp = ComponentBroker.get('atoms/MessageTimestamp');
var TextForEvent = require("../../../../src/TextForEvent");

module.exports = React.createClass({
    displayName: 'EventAsTextTile',
    mixins: [EventAsTextTileController],

    render: function() {
        var text = TextForEvent.textForEvent(this.props.mxEvent);
        var timestamp = this.props.last ? <MessageTimestamp ts={this.props.mxEvent.getTs()} /> : null;
        return (
            <div className="mx_MessageTile mx_MessageTile_notice">
                <div className="mx_MessageTile_avatar">
                    <img src={ this.props.mxEvent.sender ? MatrixClientPeg.get().getAvatarUrlForMember(this.props.mxEvent.sender, 40, 40, "crop") : null } width="40" height="40" alt=""/>
                </div>            
                { timestamp }
                <span className="mx_SenderProfile"></span>
                <span className="mx_MessageTile_content">
                    {TextForEvent.textForEvent(this.props.mxEvent)}
                </span>
            </div>
        );
    },
});

