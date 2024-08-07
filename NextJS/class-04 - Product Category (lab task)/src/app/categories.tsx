"use client";

type CategoriesType = {
    categories: string[];
    selectCategoryState: (cate: string) => void;
}

export default function Categories({
    categories,
    selectCategoryState
}: CategoriesType) {
    return (
        <>
            {
                categories.map((category, i) => (
                    <button key={category + i} onClick={() => {
                        selectCategoryState(category);
                    }}>
                        {category}
                    </button>
                ))
            }
        </>
    )
} 