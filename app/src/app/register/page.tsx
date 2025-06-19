'use client';

import Image from 'next/image';
import { useRegister } from './useRegister';

export default function Registro() {
  const { form, error, handleChange, handleSubmit } = useRegister();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow py-4 px-6 flex items-center">
        <Image src="/logo.png" alt="Logo Yavirac" width={100} height={60} />
      </header>

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-lg flex max-w-5xl w-full overflow-hidden">
          <div className="w-full md:w-1/2 p-10">
            <div className="mb-6 text-center">
              <Image src="/logo.png" alt="Logo Yavirac" width={100} height={100} className="mx-auto mb-4" />
              <h1 className="text-3xl font-semibold text-gray-700">Registro</h1>
              <p className="text-sm text-gray-500">Ingrese sus credenciales</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-gray-600">Nombre de usuario</label>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600">Confirmar contraseña</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600">Rol</label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                >
                  <option value="">Seleccione un rol</option>
                  <option value="coordinador academico">Coordinador Académico</option>
                  <option value="docente">Docente</option>
                  <option value="coordinador de carrera">Coordinador de Carrera</option>
                </select>
              </div>

              {error && <p className="text-red-600 text-sm">{error}</p>}

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition duration-300"
              >
                Ingresar
              </button>
            </form>

            <p className="text-sm text-center mt-4">
              ¿Ya tienes una cuenta?{' '}
              <a href="/login" className="text-blue-600 hover:underline">
                Inicia Sesión
              </a>
            </p>
          </div>

          <div className="hidden md:flex md:w-1/2 bg-blue-900 text-white items-center justify-center p-6">
            <div className="text-center">
              <h2 className="text-xl font-bold">SUPERIOR TECNOLÓGICO</h2>
              <h1 className="text-2xl font-extrabold">DE TURISMO Y PATRIMONIO YAVIRAC</h1>
              <p className="mt-2 text-sm italic">¡Fortaleciendo Capacidades!</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
