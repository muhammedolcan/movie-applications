import React from 'react'
import PropTypes from 'prop-types'
import { Card, Grid } from 'semantic-ui-react'



const ActorList =props=> {
    
        return (
            <div>
                 <Grid stackable columns={3}>
						{
							props.actors.map(actor,key =>(
                            <Grid.Column key={actor.photo}>
                                <Card>
                                    <Card
                                        image={actor.photo}
                                        header={ actor.name}
                                        extra={actor.description}
                                    />
                                </Card>
                            </Grid.Column>
                            ) 
                            )
						}
					</Grid>
            </div>
        )
    
}

ActorList.prototype={
    actors:PropTypes.array.isRequired
}

ActorList.defaultProps={};

export default ActorList