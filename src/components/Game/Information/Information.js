import styles from './information.module.css';
import { store } from '../../../store';
export const InformationContainer = () => {

	const state = store.getState()
	const information = () => {
		if (state.isDraw) {
			return 'Ничья';
		} else if (!state.isDraw && state.isGameEnded) {
			return `Победа: ${state.currentPlayer}`;
		} else {
			return `Ходит: ${state.currentPlayer}`;
		}
	};

	return (
		<div className={styles.information}>
			<p>
				Статус: <span>{information()}</span>
			</p>
		</div>
	);
};
