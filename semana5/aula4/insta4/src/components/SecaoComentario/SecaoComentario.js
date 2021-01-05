import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		comentario:"",
	}

 onChangeComentario = (event) => {
		this.setState({
		comentario: event.target.value
	})
	}

 ConsoleClickBotao = () => {
		console.log(this.state.comentario);
		this.setState({
			comentario: "",
		});
	  };
	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.comentario}
				onChange={this.onChangeComentario}
				
				
			/>
			<button onClick={ this.props.aoEnviar}>Enviar</button>
			
		</div>
	}
}

