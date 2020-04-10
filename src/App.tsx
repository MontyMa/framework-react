import React, {Component} from 'react';
import './App.scss';
import piece from './piece-data';
import {Piece} from './Piece';

interface peiceInfo {
    label: string;
    name: string;
    domination: string;
}

interface StateI {
    piece: { label: string; name: string; domination: string }[][];
}

export class App extends Component<any, StateI> {
    state = {
        piece: piece
    };

    // 有落子的位置
    seat = '';
    // 没有落子的位置
    seatEmpty = '';

    constructor(props: any) {
        super(props);
        console.log(this.state);
    }

    getAxis(number: number) {
        const axisLi = [];

        for (let axis = 1; axis <= number; axis++) {
            axisLi.push(<li key={axis} className={'axis'}/>);
        }

        return axisLi;
    }

    getPiecInfo = (info: peiceInfo, xAxis: number, yAxis: number) => {
        // this.seat = '';
        // 如果点击的没有落子的位置

        // if (!info.name) {
        //     console.log(this.seat);
        // }

        const seat = [xAxis, yAxis].join('_');

        if (info.name) {
            this.seat = seat;
        } else {
            this.seatEmpty = seat;

            if (this.seat) {
                const [_xAxis, _yAxis] = this.seat.split('_');
                const [_xAxisEmpty, _yAxisEmpty] = this.seatEmpty.split('_');

                const pieceCopy = JSON.parse(JSON.stringify(this.state.piece));

                pieceCopy[Number(_xAxis)][Number(_yAxis)] = this.state.piece[Number(_xAxisEmpty)][Number(_yAxisEmpty)];
                pieceCopy[Number(_xAxisEmpty)][Number(_yAxisEmpty)] = this.state.piece[Number(_xAxis)][Number(_yAxis)];

                this.setState({
                    piece: pieceCopy
                });
                console.log(_xAxis, _yAxis);
            }
        }
        // this.state.piece.some((elem, index) => {
        //     return elem.some((event, index2) => {
        //         if (
        //             event.label === info.label &&
        //             event.name === info.name &&
        //             event.domination === info.domination
        //         ) {
        //             this.seat = [index, index2].join('_');
        //             return true;
        //         }
        //     });
        // });
        //
        // console.log(this.seat);
    };

    render() {
        return (
            <div className={'content'}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                {/*棋盘*/}
                {/*<div className={'checkerboard'}>*/}
                <ul className={'xAxis'}>
                    {this.getAxis(9)}
                </ul>
                <ul className={'yAxis'}>
                    {this.getAxis(10)}
                </ul>

                {/*楚河 汉界*/}
                <ul className={'boundary'}>
                    <li>楚河</li>
                    <li>汉界</li>
                </ul>
                {/*</div>*/}
                {
                    this.state.piece.map((elem, indexP) => {
                        return (
                            <div key={indexP}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                {
                                    elem.map((pieceInfo, index) => {
                                        return (
                                            <Piece
                                                key={`${pieceInfo.label}_${pieceInfo.domination}_${index}`}
                                                pieceInfo={pieceInfo}
                                                xAxis={indexP}
                                                yAxis={index}
                                                emitPiecInfo={this.getPiecInfo}
                                            />
                                        );
                                    })
                                }
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default App;
