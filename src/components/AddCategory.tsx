import { useState } from 'react';
import PropTypes from 'prop-types';

interface CategoryProps {
	setCategories: (categories: any) => void;
}

export const AddCategory = ({ setCategories }: CategoryProps) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e: any) => setInputValue(e.target.value);

	const handleSubmit = (e: any) => {
		e.preventDefault();

		if (inputValue.trim().length <= 2) {
			return;
		}
		setCategories((cat: string[]) => [inputValue, ...cat]);
		setInputValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={inputValue} onChange={handleInputChange} />
		</form>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
