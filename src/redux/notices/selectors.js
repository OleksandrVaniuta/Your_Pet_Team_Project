// бере зі стейту оголошення по категорії
export const selectNotices = state => state.notices.items;
// бере зі стейту кількість сторінок у відповіді
export const selectTotalPages = state => state.notices.totalPages;
// бере зі стейту чи завантажується
export const selectIsNoticeLoading = state => state.notices.isLoading;
// export const selectCategory = state => state.notices.category;