import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { ReactNode, useState, useEffect } from 'react';

import { Text } from '../text';
import { Spacing } from '../spacing';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	OptionType,
	defaultArticleState,
} from 'src/constants/articleProps';

import { FormState } from 'src/index';

export type ArticleParamsFormProps = {
	arrowButton: ReactNode;
	isOpen: boolean;
	formState: FormState;
	changeFormState(state: FormState): void;
	submitState(event: any): void;
};

export const ArticleParamsForm = ({
	arrowButton,
	isOpen,
	formState,
	changeFormState,
	submitState,
}: ArticleParamsFormProps) => {
	const [selectedFontFamily, setSelectedFontFamily] = useState<OptionType>(
		formState.fontFamilyOption
	);
	const [selectedFontSize, setSelectedFontSize] = useState<OptionType>(
		formState.fontSizeOption
	);
	const [selectedFontColor, setSelectedFontColor] = useState<OptionType>(
		formState.fontColor
	);
	const [selectedBackgroundColor, setSelectedBackgroundColor] =
		useState<OptionType>(formState.backgroundColor);
	const [selectedWidth, setSelectedWidth] = useState<OptionType>(
		formState.contentWidth
	);

	useEffect(() => {
		changeFormState({
			fontFamilyOption: selectedFontFamily,
			fontSizeOption: selectedFontSize,
			fontColor: selectedFontColor,
			backgroundColor: selectedBackgroundColor,
			contentWidth: selectedWidth,
		});
	}, [
		selectedFontFamily,
		selectedFontSize,
		selectedFontColor,
		selectedBackgroundColor,
		selectedWidth,
	]);

	const changeFontFamily = (selected: OptionType) => {
		setSelectedFontFamily(selected);
	};

	const changeFontSize = (selected: OptionType) => {
		setSelectedFontSize(selected);
	};

	const changeFontColor = (selected: OptionType) => {
		setSelectedFontColor(selected);
	};

	const changeBackgroundColor = (selected: OptionType) => {
		setSelectedBackgroundColor(selected);
	};

	const changeWidth = (selected: OptionType) => {
		setSelectedWidth(selected);
	};

	const resetState = () => {
		changeFormState(defaultArticleState);
		setSelectedFontFamily(fontFamilyOptions[0]);
		setSelectedFontSize(fontSizeOptions[0]);
		setSelectedFontColor(fontColors[0]);
		setSelectedBackgroundColor(backgroundColors[0]);
		setSelectedWidth(contentWidthArr[0]);
	};

	return (
		<>
			{arrowButton}
			<aside
				className={`${styles.container} ${
					isOpen ? styles.container_open : ''
				}`}>
				<form
					className={styles.form}
					onSubmit={submitState}
					onReset={resetState}>
					<Text as={'h1'} size={31} weight={800}>
						ЗАДАЙТЕ ПАРАМЕТРЫ
					</Text>

					<Spacing size={50} />

					<Select
						options={fontFamilyOptions}
						selected={selectedFontFamily}
						onChange={changeFontFamily}
						title='ШРИФТ'
					/>

					<Spacing size={50} />

					<RadioGroup
						name={'font-family'}
						options={fontSizeOptions}
						selected={selectedFontSize}
						onChange={changeFontSize}
						title='РАЗМЕР ШРИФТА'
					/>

					<Spacing size={50} />

					<Select
						options={fontColors}
						selected={selectedFontColor}
						onChange={changeFontColor}
						title='ЦВЕТ ШРИФТА'
					/>

					<Spacing size={50} />
					<Separator />
					<Spacing size={50} />

					<Select
						options={backgroundColors}
						selected={selectedBackgroundColor}
						onChange={changeBackgroundColor}
						title='ЦВЕТ ФОНА'
					/>

					<Spacing size={50} />

					<Select
						options={contentWidthArr}
						selected={selectedWidth}
						onChange={changeWidth}
						title='ШИРИНА КОНТЕНТА'
					/>

					<Spacing size={72} />

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
