import { useRetryEmail } from '../hook/useFetch';

const TableLogs = ({ logs = [], onReload }) => {

 const { mutate: retrySend, isPending, variables } = useRetryEmail({
    onSuccess: () => {
      if (onReload) onReload();
    }
  });

  return (
      <table className="w-full">
        <thead>
          <tr className="bg-backgroundBlue text-fontLight">
            <th className="p-2">Destinatário</th>
            <th className="p-2">Status</th>
            <th className="p-2">Error</th>
            <th className="p-2">Data de Envio</th>
            <th className="p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index} className="text-center border-t">
              <td className="p-2 border">{log.recipient}</td>
              <td className={`p-2 border border-black ${log.status === 'ERROR' ? 'text-red-600' : 'text-green-600'}`}>
                {log.status}
              </td>
              <td className="p-2 border">{log.error || '-'}</td>
              <td className="p-2 border">{new Date(log.dateSend).toLocaleString('pt-BR')}</td>
              <td className="p-2 border">
                {log.status === 'ERROR' && (
                  <button
                    onClick={() => retrySend({ email: log.recipient })}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 disabled:opacity-50 cursor-pointer"
                    disabled={isPending && variables?.email === log.recipient}
                  >
                    {isPending && variables?.email === log.recipient ? 'Reenviando...' : 'Reenviar'}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default TableLogs;
