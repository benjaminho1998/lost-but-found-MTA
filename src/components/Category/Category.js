import React from 'react';

const Category = (props) => {
    const title = props.title;
    const subCatArr = props.subCatArr;

    return (
        <div>
            {title}
            {/* <div>
                {category.SubCategory[0]}
            </div> */}
            {subCatArr[0].SubCategory}
        </div>
    );
}

export default Category;