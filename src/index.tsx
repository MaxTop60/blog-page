import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { ArrowButton } from './components/arrow-button';
import { defaultArticleState } from './constants/articleProps';

import { OnClick } from './components/arrow-button/ArrowButton';
import { OptionType } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

export type FormState = {
	fontFamilyOption: OptionType;
	fontColor: OptionType;
	backgroundColor: OptionType;
	contentWidth: OptionType;
	fontSizeOption: OptionType;
};

export type PageState = FormState;

const App = () => {
	const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

	const [formState, setFormState] = useState<FormState>(defaultArticleState);
	const [pageState, setPageState] = useState<PageState>(defaultArticleState);

	const openCloseForm: OnClick = () => {
		setIsFormOpen(!isFormOpen);
	};

	const changeFormState = (state: FormState) => {
		setFormState(state);
	};

	const submitState = (event: any) => {
		event.preventDefault();
		setPageState(formState);
	};

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': pageState.fontFamilyOption.value,
					'--font-size': pageState.fontSizeOption.value,
					'--font-color': pageState.fontColor.value,
					'--container-width': pageState.contentWidth.value,
					'--bg-color': pageState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				arrowButton={
					<ArrowButton callback={openCloseForm} state={isFormOpen} />
				}
				isOpen={isFormOpen}
				formState={formState}
				changeFormState={changeFormState}
				submitState={submitState}
			/>
			<Article pageState={pageState} />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
