import React, {Component} from 'react';


interface PieceProps {
    pieceInfo: {
        name: string;
        label: string;
        domination: string;
    };
    emitPiecInfo: (info: PieceProps['pieceInfo'], xAxis: number, yAxis: number) => void;
    xAxis: number;
    yAxis: number;
}

export class Piece extends Component<PieceProps> {
    getBgColor(): string {
        if (!this.props.pieceInfo.name) {
            return 'transparent';
        }

        return this.props.pieceInfo.domination === 'red' ? '#fd9e9e' : '#6d6d6d';
    }

    pieceClick = (pieceInfo: PieceProps['pieceInfo'], xAxis: number, yAxis: number) => {
        this.props.emitPiecInfo(pieceInfo, xAxis, yAxis);
    };

    render() {
        return (
            <div className={'piece'}
                style={{
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50px',
                    backgroundColor: this.getBgColor(),
                    color: '#fff',
                    userSelect: 'none',
                    cursor: this.props.pieceInfo.domination && 'pointer'
                }}
                onClick={() => this.pieceClick(this.props.pieceInfo, this.props.xAxis, this.props.yAxis)}>
                {this.props.pieceInfo.name}
            </div>
        );
    }
}
