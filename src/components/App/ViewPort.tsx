import * as React from 'react';

export class ViewPort extends React.Component<{ view: string }, {}> {
    render() {
        var comp = [];
        var set = false;
        React.Children.forEach(this.props.children, x => {
            var match = Array.isArray((x as any).props.match) ? (x as any as View).props.match : [(x as any).props.match]
            if (match.indexOf(this.props.view) >= 0) {
                comp.push(x);
            }
        });
        return comp.length == 1 ? comp[0] as React.ReactElement<any> : <div> { comp } </div>;
    }
}

export class View extends React.Component<{ match: string | string[] }, {}> {
    render() {
        if (React.Children.count(this.props.children) == 0)
            return null;
        if (typeof this.props.children === 'string')
            return <span>{this.props.children}</span>
        if (React.Children.count(this.props.children) > 1)
            return <div> {this.props.children} </div>
        return this.props.children as React.ReactElement<any>;
    }
}