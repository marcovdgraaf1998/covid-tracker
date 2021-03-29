import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './InfoBox.css';

function InfoBox({ title, cases, isRed, isBlue, active, total, ...props }) {
    return (
        <Card className={`infoBox ${active && 'infoBox--selected'} ${isBlue && 'infoBox--blue'} ${isRed && 'infoBox--red'}`} onClick={props.onClick}>
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>
                <h2 className={`infoBox__cases ${isBlue && 'infoBox--blue'} ${isRed && 'infoBox--red'}`}>{cases}</h2>
                <Typography className="infoBox__total" color="textSecondary">
                    {total} total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
