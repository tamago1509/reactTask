import React, { Component } from 'react';
import classNames from 'classnames'
import './Table.css'



class Table extends Component {
    constructor() {
        super()
    
        this.tableInfo = [
            {no : 1, first: "Mark", last: "Otto", handle: "@mdo"},
            {no : 2, first: "Jacob", last: "Thorton", handle: "@fat"},
            {no : 3, first: "Mark", last: "Otto", handle: "@mdo"}
        ]
    }
    

    render(){
        return (
            <div className="table">
                <table>
                    <tr className="tr-is-even">
                        <th>#</th>
                        <th>First</th>
                        <th>Last</th>
                        <th>Handle</th>
                    </tr>
                    {
                        
                        
                        this.tableInfo.map(info =>
                            {
                                let evenClass = "tr-";
                                if(info.no %2 ===0)
                                    evenClass = classNames({[`${evenClass}is-even`] :true})
                                else 
                                    classNames({[`${evenClass}is-even`] :false})

                                return (
                                    <tr className = {evenClass}>
                                        <td>{info.no}</td>
                                        <td>{info.first}</td>
                                        <td>{info.last}</td>
                                        <td>{info.handle}</td>
                                    </tr>
                                )
                            }
                        )
                    }
                  
                </table>
            </div>
        )}
    
        
    
}

export default Table
