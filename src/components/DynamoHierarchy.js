import React from 'react';
import { Link } from 'react-router-dom';

function DynamoHierarchy(props) {
    let lastLeaf = props.lastLeaf;
    let extractHierarchy = props.extractHierarchy;
    let nodeDetail = props.nodeDetail;
    return (
        <div>
            <div className='nodeHier'>
                <b>Dynamo Hierarchy :&nbsp;
            </b>
                <Link to='/'>Root, </Link>
                {extractHierarchy(lastLeaf)}
                {lastLeaf.Arr
                    ? <span style={{
                        'color': 'gray'
                    }}>{lastLeaf.Name}</span>
                    : null
                }
                <br />
            </div>
            {!lastLeaf.Arr
                ?
                (nodeDetail(lastLeaf))
                : <hr />}

            <br />
        </div>
    )
}

export default DynamoHierarchy;
