import { useState } from 'react';
import clsx from 'clsx';
import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export type ArrowButtonProps = {
	callback: OnClick;
	state: boolean;
};

export const ArrowButton = ({ callback, state }: ArrowButtonProps) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={`${styles.container} ${state ? styles.container_open : ''}`}
			onClick={callback}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={`${styles.arrow} ${state ? styles.arrow_open : ''}`}
			/>
		</div>
	);
};
