export function Button({
    buttonClassName,
    handleClick,
    id,
}: {
    buttonClassName: string;
    handleClick: (gentleManId: number) => void;
    id: number;
}) {
    return (
        <i
            onClick={() => handleClick(id)}
            className={buttonClassName}
            data-testid="btn-test"
        ></i>
    );
}
