import sqlite3
from sqlite3 import Error

def create_connection(db_file):
  """
  create database connection to an SQLite database

  Args:
      db_file (string): name of database file
  Return:
      Connection object or None
  """
  conn = None
  try:
    conn = sqlite3.connect(db_file)
    return conn
  except Error as e:
    print(e)
  return conn

if __name__ == "__main__":
  create_connection("portfolio.db")