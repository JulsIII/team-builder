


export default function TeamList(props) {
    const { tList } = props;
    console.log('array', tList);
        return(
        <div>{
            tList.map((tMember) => (
            <div>
                <h2>{tMember.name}</h2>
                <h2>{tMember.email}</h2>
                <h2>{tMember.role}</h2>
            </div>
        ))
    }</div>
    )
}


// username: "",
// email: "",
// role: "",